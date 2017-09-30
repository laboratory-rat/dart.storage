import 'dart:convert';
import 'dart:html';
import 'enums.dart';

class LRStorage {
  LRStorageType type;
  String prefix;
  String fullKey(String key) => prefix != '' ? "$prefix-$key" : key;

  LRStorage({this.type, this.prefix = ""});
  LRStorage.clone(LRStorage store) {
    type = store.type;
    prefix = store.prefix;
  }

  void save<T>(String key, T object) {
    var data = JSON.encode(object);
    Storage store = _getStore();
    store[fullKey(key)] = data;
  }

  void saveString(String key, String data) {
    var store = _getStore();
    store[fullKey(key)] = data;
  }

  T load<T>(String key) {
    Storage store = _getStore();
    if (!store.containsKey(fullKey(key))) return null;
    return JSON.decode(store[fullKey(key)]);
  }

  String loadString(String key) {
    var store = _getStore();
    if (!store.containsKey(fullKey(key))) return '';
    return store[fullKey(key)];
  }

  void delete(String key) {
    var store = _getStore();
    if (store.containsKey(fullKey(key))) store[fullKey(key)] = '';
  }

  Storage _getStore() {
    switch (type) {
      case LRStorageType.Local:
        return window.localStorage;
      case LRStorageType.Session:
        return window.sessionStorage;
    }

    return null;
  }
}
