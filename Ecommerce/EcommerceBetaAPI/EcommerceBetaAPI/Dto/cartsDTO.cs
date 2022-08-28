using EcommerceBetaAPI.Models;

namespace EcommerceBetaAPI.Dto
{
    public class cartsDTO
    {
        public int CartId { get; set; }
        public double CartTotal { get; set; }
        public int UserId { get; set; }
        public int Quantity { get; set; }
        public string Username { get; set; }
        public string EmailId { get; set; }
        public string Address { get; set; }
        public Product Product { get; set; }
    }
}
