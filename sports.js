class Person {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  _firstname;
  _lastname;
  _nickname;
  _yearOfBirth;
}

class Athlete extends Person {
  constructor(firstname, lastname, sport) {
    super(firstname, lastname);
    this._sport = sport;
  }

  _pictureURL;
  _weight;
  _sport;
  _achievements;

  get pictureURL() {
    return this._pictureUrl;
  }
  set pictureURL(x) {
    this._pictureUrl = x;
  }

  get weight() {
    return this._weight;
  }
  set weight(x) {
    this._weight = x;
  }

  get sport() {
    return this._sport;
  }
  set sport(x) {
    this._sport = x;
  }

  get achievements() {
    return this._achievements;
  }
  set achievements(x) {
    this._achievements = x;
  }
}

var athlete1 = new Athlete("Juho", "Koskela", "Ampumahiihto");

console.log(athlete1);

athlete1.achievements = "Kultametalli";

console.log(athlete1);
