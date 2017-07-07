import 'dart:convert';
import 'dart:mirrors';

abstract class JsonObject{

    JsonObject();

    JsonObject.parseString(String target){
        fromJsonString(target);
    }

    JsonObject.parse(Map target){
        fromJson(target);
    }

    Map toJson() { 
        Map map = new Map();
        InstanceMirror im = reflect(this);
        ClassMirror cm = im.type;
        var decls = cm.declarations.values.where((dm) => dm is VariableMirror);
        decls.forEach((dm) {
            var key = MirrorSystem.getName(dm.simpleName);
            var val = im.getField(dm.simpleName).reflectee;
            map[key] = val;
        });

        return map;
    }

    void fromJsonString(String target) => fromJson(JSON.decode(target));
    void fromJson(Map target);

}