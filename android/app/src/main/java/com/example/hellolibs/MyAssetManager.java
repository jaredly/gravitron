package com.example.hellolibs;

import static android.content.Context.MODE_PRIVATE;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.opengl.GLUtils;
import android.os.Handler;
import android.util.Base64;
import android.util.Log;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class MyAssetManager {
    private final AssetManager amgr;
    private final Context mContext;
    private final SharedPreferences mSharedPreferences;
    private boolean mShowingDialog = false;
    public double pixelDensity;
    MyAssetManager(Context context, float pixelDensity) {
        this.amgr = context.getAssets();
        mContext = context;
        this.pixelDensity = pixelDensity;
        mSharedPreferences = context.getSharedPreferences("reasongl", MODE_PRIVATE);
    }

    public String readFileContents(String path) {
        try {
            InputStream inputStream = amgr.open(path);
            ByteArrayOutputStream result = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int length;
            while ((length = inputStream.read(buffer)) != -1) {
                result.write(buffer, 0, length);
            }
            return result.toString("UTF-8");
        } catch (IOException e) {
            return null;
        }
    }

    public void showAlert(final String title, final String message) {
        if (mShowingDialog) {
            Log.e("reasongl", "Not showing alert, because one is already open. " + title + " : " + message);
            return;
        }
        mShowingDialog = true;

        Handler mainHandler = new Handler(mContext.getMainLooper());

        Runnable myRunnable = new Runnable() {
            @Override
            public void run() {
                new AlertDialog.Builder(mContext)
                        .setMessage(message)
                        .setTitle(title)
                        .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface, int i) {
                                mShowingDialog = false;
                            }
                        })
                        .setIcon(android.R.drawable.ic_dialog_alert)
                        .show();

            } // This is your code
        };
        mainHandler.post(myRunnable);

    }

    public Bitmap openBitmap(String path)
    {
        try {
            return BitmapFactory.decodeStream(amgr.open(path));
        } catch (Exception e) {
            return null;
        }
    }

    public void texImage2DWithBitmap(int target, int level, Bitmap bitmap, int border) {
        GLUtils.texImage2D(target, level, bitmap, border);
    }

    public void fillTextureWithColor(int target, int level, int red, int green, int blue, int alpha) {
        Bitmap image = Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
        image.eraseColor(Color.argb(alpha, red, green, blue));
        GLUtils.texImage2D(target, level, image, 0);
    }

    public int getBitmapWidth(Bitmap bmp) { return bmp.getWidth(); }
    public int getBitmapHeight(Bitmap bmp) { return bmp.getHeight(); }

    public byte[] loadUserData(String key) {
        String data = mSharedPreferences.getString(key, "");
        Log.d("Got Data", data);
        if (data.isEmpty()) {
            return null;
        } else {
            try {
                byte[] value = Base64.decode(data, Base64.DEFAULT);
                return value;
            } catch (Exception e) {
                return null;
            }
        }
    }

    public void saveUserData(String key, byte[] value) {
        SharedPreferences.Editor editor = mSharedPreferences.edit();
        String data = Base64.encodeToString(value, Base64.DEFAULT);
        Log.d("Saving Data", data);
        editor.putString(key, data);
        editor.apply();
    }

    public void closeBitmap(Bitmap bmp)
    {
        bmp.recycle();
    }
}
