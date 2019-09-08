function Circle (xPoint, yPoint, radius) {
    this.x = xPoint; 
    this.y = yPoint;  
    this.r = radius;  

    this.getLocation=function(){

        document.write("the locatin of the circle is "+this.x+" " +this.y);
    }

    }
    var Circle1=new Circle(3,4,5);
    Circle1.area=function(){

        var area;
        area=(this.radius**2)*(3.14);
        document.write(" area  of  circle is "+ area);

    }

    var Circle2=new Circle(10,10,10);
    Circle2.circumference=function()
    {
        var circumference;
        circumference=(this.radius)*(2)*(3.14);
        document.write("the circumference of circle is "+circumference);

    }
    Circle1.area();
    document.write("<br/>");
    Circle1.getLocation();
    document.write("<br/>");
    Circle2.getLocation();
    document.write("<br/>");
    Circle2.circumference();
    document.write("<br/>")
    console.log("end of task 6 //////////////////");


