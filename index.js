function doublingPerDay(days){
    var reward = 0.01;
    for (var i = 0; i <= days; i++){
        reward *= 2;
    }
    return reward;
}

doublingPerDay(30);