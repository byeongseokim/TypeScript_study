function introduce(someone) {
    if ('age' in someone) {
        console.log(someone.age);
        return;
    }
    if ('skill' in someone) {
        console.log(someone.skill);
        return;
    }
}
introduce({ name: '캡틴', skill: '이젠 강의' });
