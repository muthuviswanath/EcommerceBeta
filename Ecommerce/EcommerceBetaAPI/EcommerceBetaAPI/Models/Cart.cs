using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceBetaAPI.Models
{
    public partial class Cart
    {
        public int Cartid { get; set; }
        public int Userid { get; set; }
        public int Productid { get; set; }
        public double Carttotal { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
