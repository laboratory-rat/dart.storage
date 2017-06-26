import 'json_object.dart';
import "dart:mirrors";

class JsonPackage<T extends JsonObject> extends JsonObject{
    List<T> inner;
    int _time;

    DateTime get time => _time.isNaN ? null : new DateTime.fromMicrosecondsSinceEpoch(_time);
    set time(DateTime t) { _time = t.millisecondsSinceEpoch; }

    JsonPackage({this.inner, DateTime time = null})
    {
        time == null ? this.time = new DateTime.now() : this.time = time; 
    }

    @override
    void fromJson(target) {
        _time = target['_time'];
        inner = [];
        target['inner'].forEach((i) {
            ClassMirror c = reflectClass(T);
            InstanceMirror im = c.newInstance(const Symbol(''), []);
            inner.add(im.reflectee..fromJson(i));
        });
    }
}