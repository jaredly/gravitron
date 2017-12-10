package com.example.hellolibs;

import static android.os.Looper.getMainLooper;

import android.content.Context;
import android.opengl.GLSurfaceView;
import android.os.Handler;
import android.os.SystemClock;
import android.view.MotionEvent;
import android.view.View;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

/**
 * Created by jared on 12/9/17.
 */

public class ReasonGLView extends GLSurfaceView {
    private final Context mContext;
    private final Renderer mRenderer;

    private static class Renderer implements GLSurfaceView.Renderer {
        OCamlBindings bindings = new OCamlBindings();
        long lastDrawTime = SystemClock.elapsedRealtimeNanos();
        MyAssetManager mMyAssetManager;
        GLSurfaceView view;
        Context context;

        public Renderer(GLSurfaceView view, Context context) {
            super();

            mMyAssetManager = new MyAssetManager(context);
            this.view = view;
            this.context = context;
            view.setEGLContextClientVersion(2);
            view.setRenderer(this);
        }

        public void onDrawFrame(GL10 gl) {
            long now = SystemClock.elapsedRealtimeNanos();
            long elapsed = now - lastDrawTime;
            bindings.reasonglUpdate(elapsed / 1000.0);
            lastDrawTime = now;
        }

        public void onSurfaceChanged(GL10 gl, int width, int height) {
            bindings.reasonglResize(width, height);
            // TODO
        }

        public void onSurfaceCreated(GL10 gl, EGLConfig config) {
            bindings.reasonglMain(view, mMyAssetManager);
        }
    }

    public ReasonGLView(Context context) {
        super(context);
        mContext = context;

        mRenderer = new Renderer(this, context);

        final ReasonGLView self = this;
        final OCamlBindings bindings = mRenderer.bindings;
        this.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, final MotionEvent event) {
                if (event != null) {
                    if (event.getAction() == MotionEvent.ACTION_DOWN) {
                        self.queueEvent(new Runnable() {
                            @Override
                            public void run() {
                                bindings.reasonglTouchPress(event.getX(), event.getY());
                            }
                        });
                    } else if (event.getAction() == MotionEvent.ACTION_MOVE) {
                        self.queueEvent(new Runnable() {
                            @Override
                            public void run() {
                                bindings.reasonglTouchDrag(event.getX(), event.getY());
                            }
                        });
                    } else if (event.getAction() == MotionEvent.ACTION_UP) {
                        self.queueEvent(new Runnable() {
                            @Override
                            public void run() {
                                bindings.reasonglTouchRelease(event.getX(), event.getY());
                            }
                        });
                    }
                    return true;
                } else {
                    return false;
                }
            }
        });
    }

    public void handleBackPressed(final Runnable superBackPressed) {
        this.queueEvent(new Runnable() {
            @Override
            public void run() {
                if (!mRenderer.bindings.reasonglBackPressed()) {
                    new Handler(getMainLooper()).post(superBackPressed);
                }
            }
        });
    }

    static {
        System.loadLibrary("reasongl");
    }
}
