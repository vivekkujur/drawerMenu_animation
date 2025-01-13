package com.drawer_menu_animation

import android.os.BatteryManager
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class BatteryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    val context : ReactApplicationContext = reactContext
    override fun getName(): String {
        return "BatteryModule"
    }

    @ReactMethod
    fun getBatteryLevel(promise: Promise){

        promise.resolve("test module ")

//        try {
//
//            val batteryManager = context.getSystemService(context.BATTERY_SERVICE) as BatteryManager
//            val batterylevel =  batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
//            promise.resolve(batterylevel)
//
//        }catch (e:Exception){
//            promise.reject("errr",e.message)
//        }

    }
}



