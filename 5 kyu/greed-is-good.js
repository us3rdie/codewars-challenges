//https://www.codewars.com/kata/5270d0d18625160ada0000e4
function counting ( counts ) {
    let result = 0;
    let pointsRepeat3 = [1000, 200, 300, 400, 500, 600];
    let pointsRepeat1 = [100, 0, 0, 0, 50, 0];
    for(let i = 0; i < 6; i++) {
        while (counts[i] != 0) {
            if (counts[i] >= 3) {
                result += pointsRepeat3[i];
                counts[i] = counts[i] - 3;
            }
            else if (counts[i] < 3) {
                result += pointsRepeat1[i];
                counts[i]--;
            }
        }
    }
    return result;
}

function score( dice ) {
    let counts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) { 
        counts[dice[i] - 1]++;
    }
    return counting (counts);
}