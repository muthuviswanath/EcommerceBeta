using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceBetaAPI.Models
{
    public partial class User
    {
        public User()
        {
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
            Wishlists = new HashSet<Wishlist>();
        }

        public int Userid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string Emailid { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Wishlist> Wishlists { get; set; }
    }
}
