package com.example.hellolibs;

import android.opengl.GLSurfaceView;

public class OCamlBindings {
    public native void reasonglMain(GLSurfaceView view, MyAssetManager assetManager);
    public native void reasonglResize(int width, int height);
    public native void reasonglUpdate(double timeSinceLastDraw);
    public native void reasonglTouchPress(double x, double y);
    public native void reasonglTouchDrag(double x, double y);
    public native void reasonglTouchRelease(double x, double y);
}
