@MirrorsUsed(targets: JsonPackage)

import 'json_object.dart';
import "dart:mirrors";

class JsonPackage<T extends JsonObject> extends JsonObject {
  List<T> inner;
  int _time;
  int _expired = -1;

  DateTime get time => _time.isNaN ? null : new DateTime.fromMicrosecondsSinceEpoch(_time);
  set time(DateTime t) {
    _time = t.millisecondsSinceEpoch;
  }

  DateTime get expired => _expired < 0 ? null : new DateTime.fromMicrosecondsSinceEpoch(_expired);
  set expired(DateTime t) {
    _expired = t.millisecondsSinceEpoch;
  }

  bool get isExpired => _expired < 1 ? false : new DateTime.now().millisecondsSinceEpoch >= expired.millisecondsSinceEpoch;

  JsonPackage(this.inner, [DateTime expiredIn = null, DateTime timeIn = null]) {
    timeIn == null ? this.time = new DateTime.now() : this.time = timeIn;
    expired = expiredIn;

    if (expiredIn != null && expiredIn.millisecondsSinceEpoch < timeIn.millisecondsSinceEpoch) {
      throw new FormatException('Expired time can not be less then time');
    }
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
