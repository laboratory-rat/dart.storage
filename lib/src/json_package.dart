import 'json_object.dart';

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
  void fromMap(target) {
    _time = target['_time'];
    _expired= target['_expired'];
    
    inner = [];
    target['inner'].forEach((i) {
      inner.add(i.fromMap());
    });
  }
  @override
  Map toMap() {
    Map m = new Map();

    m['inner'] = inner.map((x) => x.toMap()).toList();
    m['_time'] = _time;
    m['_expired'] = _expired;

    return m;
  }
}
