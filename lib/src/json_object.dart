import 'dart:convert';

abstract class JsonObject {
  JsonObject() {}

  void fromJson(String target) => fromMap(JSON.decode(target));

  Map toMap();
  void fromMap(Map target);
}
