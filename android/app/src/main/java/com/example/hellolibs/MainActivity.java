package com.example.hellolibs;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends Activity {
    ReasonGLView glView;
    @Override
    public void onBackPressed() {
        glView.handleBackPressed(new Runnable() {
            @Override
            public void run() {
                MainActivity.super.onBackPressed();
            }
        });
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_FULLSCREEN);
        glView = new ReasonGLView(this);
        setContentView(glView);
    }
}
