using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceBetaAPI.Models
{
    public partial class Order
    {
        public int Orderid { get; set; }
        public int Userid { get; set; }
        public int Productid { get; set; }
        public DateTime Orderdate { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
