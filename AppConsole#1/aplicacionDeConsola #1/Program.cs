// See https://aka.ms/new-console-template for more information

using System;
using System.Drawing;

namespace Trabajo
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("Digite la figura que desea calcular el area:  1. Circulo  2. Rectangulo");
                string proc_1 = Console.ReadLine();
                string proc_2 = proc_1.ToLower();
                if (proc_2 == "circulo")
                {
                    Operaciones op_1 = new Circle();
                    op_1.diametro();
                }
                else if (proc_2 == "rectangulo")
                {
                    Operaciones op_2 = new Rectangle();
                    op_2.diametro();
                }
                else
                {
                    Console.WriteLine("No se encuentran esas Figuras Geometricas");
                }
            }
        }
    }
}
