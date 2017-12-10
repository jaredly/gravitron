package com.example.hellolibs;

import android.app.Activity;
import android.content.Context;
import android.opengl.GLSurfaceView;
import android.os.Bundle;
import android.os.SystemClock;
import android.view.MotionEvent;
import android.view.View;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

public class MainActivity extends Activity {
    OCamlBindings bindings = new OCamlBindings();
    Renderer renderer;
    GLSurfaceView glView;

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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_FULLSCREEN);

        glView = new GLSurfaceView(this);
        renderer = new Renderer(glView, this);
        setContentView(glView);

        glView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, final MotionEvent event) {
                if (event != null) {
                    if (event.getAction() == MotionEvent.ACTION_DOWN) {
                        glView.queueEvent(new Runnable() {
                            @Override
                            public void run() {
                                bindings.reasonglTouchPress(event.getX(), event.getY());
                            }
                        });
                    } else if (event.getAction() == MotionEvent.ACTION_MOVE) {
                        glView.queueEvent(new Runnable() {
                            @Override
                            public void run() {
                                bindings.reasonglTouchDrag(event.getX(), event.getY());
                            }
                        });
                    } else if (event.getAction() == MotionEvent.ACTION_UP) {
                        glView.queueEvent(new Runnable() {
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

    static {
        System.loadLibrary("gravitron");
    }
}
