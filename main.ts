let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
let atala_1 = 1
let atala_2 = 0
let atala_3 = 0
basic.forever(function () {
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
basic.forever(function () {
    if (atala_3 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 30)
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 40)
        basic.pause(800)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    atala_3 = 0
    atala_3 = 0
})
basic.forever(function () {
    if (atala_1 == 1) {
        if (distantzia > 60) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 140)
        } else if (distantzia > 50) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 110)
        } else if (distantzia > 40) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 80)
        } else if (distantzia > 30) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else if (distantzia > 20) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 20)
        } else {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            atala_1 = 0
            atala_2 = 1
        }
    }
})
basic.forever(function () {
    if (atala_2 == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 140)
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            } else {
                if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 140)
                    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
                }
            }
        }
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1)) {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            atala_2 = 0
            atala_3 = 1
        }
    }
})
