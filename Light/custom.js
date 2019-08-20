const ON = true;
const OFF = false;

debugger;
let SwitchButton = function () {
    this.status = OFF; // tat
    this.lamp; // den

    this.connectToLamp = function (lamp) {
        this.lamp = lamp;
        this.status = true;
    }
    this.getConnectToLamp = function()
    {
        return this.status;
    }
    this.switchOff = function () {
        this.lamp.turnOff();
    }
    this.switchOn = function () {
       
        this.lamp.turnOn();
    }
    this.getSwitchOn = function () {
        return this.lamp.status();
    }
    this.isConnection = function () {
        if (this.getConnectToLamp() && this.lamp.status) {
            return true;
        }
        else
        {
            return false;
        }
    }
}
let Lamp = function () {
    this.status = OFF;
    this.ElectricLamp = function () {
        this.status = ON;
    }
    this.turnOn = function () {
        this.status = ON;
    }
  
    this.turnOff = function () {
        this.status = OFF;
    }
    this.getTurn = function()
    {
        return this.status;
    }
}

let congTac = new SwitchButton();
let lamp = new Lamp();

congTac.connectToLamp(lamp);
lamp.ElectricLamp();

for (let i = 0 ; i < 10 ; i++)
{   let trangThai ='';
    congTac.switchOn();
    trangThai = "Dang Bat " ; 
    console.log(trangThai);
    
    congTac.switchOff();
    trangThai = "Dang Tat "  + lamp.getTurn(); 
    console.log(trangThai);
}












