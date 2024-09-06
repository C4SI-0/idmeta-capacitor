package com.idmetacapacitor;

import android.content.Intent;
import android.os.Bundle;
import androidx.activity.ComponentActivity;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "IdMetaCapacitor")
public class IdMetaCapacitorPlugin extends Plugin {

    @PluginMethod
    public void startIdmetaFlow(PluginCall call) {
        String flowId = call.getString("flowId");
        String userToken = call.getString("userToken");

        if (flowId == null || userToken == null) {
            call.reject("flowId and userToken are required");
            return;
        }

        ComponentActivity currentActivity = getActivity();
        if (currentActivity != null) {
            Intent intent = new Intent(currentActivity, FlutterStarterActivity.class);
            intent.putExtra("flowId", flowId);
            intent.putExtra("userToken", userToken);
            currentActivity.startActivity(intent);
            call.resolve();
        } else {
            call.reject("Activity is null");
        }
    }
}
