import 'dart:convert';
import 'dart:html';
import 'enums.dart';

class LabRatStorage{
    LabRatStorageType type;
    String prefix;
    String fullKey(String key) => prefix != '' ? "{$prefix}_${key}" : key;

    LabRatStorage({this.type, this.prefix = ""});
    LabRatStorage.Clone(LabRatStorage store){
        type = store.type;
        prefix = store.prefix;
    }

    void Save<T>(String key, T object)
    {
        var data = JSON.encode(object);
        var store = _GetStore();
        store[fullKey(key)] = data;
    }

    T Load<T>(String key)
    {
        var store = _GetStore();
        if(!store.containsKey(fullKey(key))) return null;
        return JSON.decode(store[fullKey(key)]);
    }

    Object _GetStore()
    {
        switch(type){
            case LabRatStorageType.Local:
                return window.localStorage;
            case LabRatStorageType.Session:
                return window.sessionStorage;
        }

        return null;
    }
}
