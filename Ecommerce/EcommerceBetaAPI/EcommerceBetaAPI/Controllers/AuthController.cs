using EcommerceBetaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace EcommerceBetaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly EcommerceContext _context;

        public AuthController(EcommerceContext context)
        {
            _context = context;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] LoginModel user)
        {

            if (user == null)
                return BadRequest("Invalid Credentials to access the records");

            var checkUser = _context.Users.FirstOrDefault(u => u.Username == user.Username);
            if (checkUser == null)
            {
                return Unauthorized();
            }
            if (user.Username.Equals("admin") && user.Password.Equals("admin"))
            {
               return Authentication(user.Username, "Admin");
            }
            if (user.Username.Equals(checkUser.Username) && user.Password.Equals(checkUser.Password))
            {
                return Authentication(user.Username, "User");

            }
            return Unauthorized();

        }

        [HttpPost]
        public IActionResult Authentication(string username, string role)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("symmetricsecretkey$567"));
            var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim> {
                new Claim(ClaimTypes.Name,username),
                new Claim(ClaimTypes.Role,role),
                };

            var tokenOptions = new JwtSecurityToken(

                issuer: "http://localhost:5000",
                audience: "http://localhost:5000",
                claims: claims,
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signingCredentials
                );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new { Token = tokenString });

        }
    }
}
