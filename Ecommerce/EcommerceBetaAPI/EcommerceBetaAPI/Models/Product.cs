using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceBetaAPI.Models
{
    public partial class Product
    {
        public Product()
        {
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
            Wishlists = new HashSet<Wishlist>();
        }

        public int Productid { get; set; }
        public string Productname { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string Imagepath { get; set; }
        public double Productrating { get; set; }
        public double Productofferprice { get; set; }
        public string Display { get; set; }
        public string Memory { get; set; }
        public string Processor { get; set; }
        public string Camera { get; set; }
        public string Battery { get; set; }
        public string Security { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Wishlist> Wishlists { get; set; }
    }
}
