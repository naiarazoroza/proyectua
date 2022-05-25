let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
let atala_1 = 0
atala_1 = 1
basic.forever(function () {
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
basic.forever(function () {
    atala_1 = 0
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
    } else if (distantzia > 10) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    } else {
    	
    }
    atala_1 += 1
})
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1) == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 140)
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 30)
        } else {
            if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1) == 1) {
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 140)
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 30)
            }
        }
    }
})
