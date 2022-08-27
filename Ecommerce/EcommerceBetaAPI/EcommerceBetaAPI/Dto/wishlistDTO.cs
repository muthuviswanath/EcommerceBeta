using EcommerceBetaAPI.Models;

namespace EcommerceBetaAPI.Dto
{
    public class wishlistDTO
    {
        public string Username { get; set; }
        public string EmailId { get; set; }
        public string Address { get; set; }
        public Product Product { get; set; }
    }
}
