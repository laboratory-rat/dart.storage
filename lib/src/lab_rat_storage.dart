import 'dart:convert';
import 'dart:html';
import 'enums.dart';

class LabRatStorage{
    LabRatStorageType type;
    String prefix;
    String fullKey(String key) => prefix != '' ? "$prefix-$key" : key;

    LabRatStorage({this.type, this.prefix = ""});
    LabRatStorage.clone(LabRatStorage store){
        type = store.type;
        prefix = store.prefix;
    }

    void save<T>(String key, T object)
    {
        var data = JSON.encode(object);
        Storage store = _getStore();
        store[fullKey(key)] = data;
    }

    T load<T>(String key)
    {
        Storage store = _getStore();
        if(!store.containsKey(fullKey(key))) return null;
        return JSON.decode(store[fullKey(key)]);
    }

    Storage _getStore()
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
