const util = require("util");
class Checklist {
  constructor(groups = []) {
    this.groups = groups;
  }

  add(title, subGroup, checks) {
    this.groups.push(new Group(title, subGroup, checks));
    return this;
  }
}

class Group {
  constructor(title, subGroups = [], checks = []) {
    this.title = title;
    this.subGroup = subGroups;
    this.checks = checks;
  }

  addSubGroup(title, subGroups, checks) {
    this.subGroup.push(new SubGroup(title, subGroups, checks));
    return this;
  }

  addSubGroup(subgroup) {
    this.subGroup.push(subgroup);
    return this;
  }

  addCheck(name, value) {
    this.checks.push(new Check(name, value));
    return this;
  }
}

class SubGroup {
  constructor(title, subGroups = [], checks = []) {
    this.title = title;
    this.subGroups = subGroups;
    this.checks = checks;
  }

  addSubGroup(title, subgroups, checks) {
    this.subGroups.push(title, subgroups, checks);
    return this;
  }

  addSubGroup(subgroup) {
    this.subGroups.push(subgroup);
    return this;
  }

  addCheck(check) {
    this.checks.push(check);
    return this;
  }
}

class Check {
  constructor(name, value, status = 0) {
    this.name = name;
    this.value = value;
    this.status = status;
  }

  setValue(name, value, status) {
    this.name = name;
    this.value = value;
    this.status = status;
    return this;
  }
}

let checklist = new Checklist();

checklist.add(
  "Escuela Musica",
  new Group("Practica Musica Clasica")
    .addSubGroup(
      new SubGroup("Solfeo").addCheck(
        new Check("Lectura de Repertorio", "2 hrs", "Aprobada")
      )
    )
    .addSubGroup(
      new SubGroup("Entonacion").addCheck(
        new Check("Entonar Escalas", "30 min", "Fallida")
      )
    )
    .addSubGroup(
      new SubGroup("Ritmo").addCheck(
        new Check("Notas musicales", "30 min", "Aprobada")
      )
    )
);

console.log(util.inspect(checklist, false, null, true));