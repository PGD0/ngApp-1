using System;

namespace Trabajo
{
    public abstract class Operaciones
    {
        public abstract void diametro();
    }

    public class Rectangle : Operaciones
    {
        public override void diametro()
        {
            Console.WriteLine("Digite la base del rectangulo: ");
            double base1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Digite la altura del rectangulo: ");
            double altura = Convert.ToDouble(Console.ReadLine());
            double area = base1 * altura;
            Console.WriteLine("El area del rectangulo es de: " + area + " cm");
        }
    }
    public class Circle : Operaciones
    {
        public override void diametro()
        {
            Console.WriteLine("Digite el radio del circulo: ");
            double radio = Convert.ToDouble(Console.ReadLine());
            double area = (radio * radio) * Math.PI;
            Console.WriteLine("El area del circulo es de: " + Math.Round(area, 2) + " cm");
        }
    }
}