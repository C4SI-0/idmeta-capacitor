package com.idmetacapacitor;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.embedding.engine.FlutterEngineCache;
import io.flutter.embedding.engine.dart.DartExecutor;
import io.flutter.plugin.common.MethodChannel;

import java.util.HashMap;

public class FlutterStarterActivity extends AppCompatActivity {

    private static final String CHANNEL = "com.idmetareactnative/data";
    private static final String ENGINE_ID = "my_engine_id";
    private FlutterEngine flutterEngine;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String flowId = getIntent().getStringExtra("flowId");
        String userToken = getIntent().getStringExtra("userToken");

        flutterEngine = FlutterEngineCache.getInstance().get(ENGINE_ID);
        if (flutterEngine == null) {
            flutterEngine = new FlutterEngine(this);
            flutterEngine.getDartExecutor().executeDartEntrypoint(
                DartExecutor.DartEntrypoint.createDefault()
            );
            FlutterEngineCache.getInstance().put(ENGINE_ID, flutterEngine);

            new MethodChannel(flutterEngine.getDartExecutor().getBinaryMessenger(), CHANNEL)
                .setMethodCallHandler(
                    (call, result) -> {
                        if (call.method.equals("getData")) {
                            HashMap<String, Object> data = new HashMap<>();
                            data.put("flowId", flowId);
                            data.put("userToken", userToken);
                            result.success(data);
                        } else {
                            result.notImplemented();
                        }
                    }
                );
        }

        Intent intent = FlutterActivity
            .withCachedEngine(ENGINE_ID)
            .build(this);

        startActivity(intent);
        finish();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}