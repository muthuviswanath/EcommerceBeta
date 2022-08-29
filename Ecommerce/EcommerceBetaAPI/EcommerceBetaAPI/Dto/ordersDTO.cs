using EcommerceBetaAPI.Models;
using System;

namespace EcommerceBetaAPI.Dto
{
    public class ordersDTO
    {
        public float TotalPrice { get; set; }
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public DateTime OrderDate { get; set; }
        public int Quantity { get; set; }
        public string Username { get; set; }
        public string EmailId { get; set; }
        public string Address { get; set; }
        public Product Product { get; set; }
    }
}
