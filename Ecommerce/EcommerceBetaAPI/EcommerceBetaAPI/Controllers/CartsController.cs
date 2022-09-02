using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceBetaAPI.Models;
using EcommerceBetaAPI.Dto;
using Microsoft.AspNetCore.Authorization;

namespace EcommerceBetaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly EcommerceContext _context;

        public CartsController(EcommerceContext context)
        {
            _context = context;
        }

        // GET: api/Carts
        [HttpGet]
        [Authorize (Roles ="User")]
        public async Task<ActionResult<IEnumerable<cartsDTO>>> GetCarts()
        {
            // return await _context.Carts.Include(c => c.User).Include(c => c.Product).ToListAsync();

            var test = _context.Carts.Include(c => c.User).Include(c => c.Product).Select(x =>
            new cartsDTO
            {
                CartTotal = x.Carttotal,
                Username = x.User.Username,
                EmailId = x.User.Emailid,
                Address = x.User.Address,
                Product = x.Product
            });
            var value = await test.ToListAsync();
            return value;
        }

        // GET: api/Carts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var cart = await _context.Carts.Include(c => c.User).Include(c => c.Product).FirstOrDefaultAsync(c => c.Cartid == id);


            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }

        //GET: api/Carts/User/4

        [HttpGet("User/{id}")]
        [Authorize(Roles = "User")]
        public async Task<ActionResult<IEnumerable<cartsDTO>>> GetCartOfUser(int id)
        {
            var usersCart = _context.Carts.Where(x => x.Userid == id).Include(c => c.User).Include(c => c.Product).Select(x =>
            new cartsDTO
            {
                CartId = x.Cartid,
                CartTotal = x.Carttotal,
                UserId = x.Userid,
                Quantity = x.Quantity,
                Username = x.User.Username,
                EmailId = x.User.Emailid,
                Address = x.User.Address,
                Product = x.Product
            });
            var value = await usersCart.ToListAsync();
            return value;
        }

        // PUT: api/Carts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCart(int id, Cart cart)
        {
            if (id != cart.Cartid)
            {
                return BadRequest();
            }

            _context.Entry(cart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Carts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = "User")]
        public async Task<ActionResult<Cart>> PostCart(Cart cart)
        {
            _context.Carts.Include(c => c.User).Include(c => c.Product);
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCart", new { id = cart.Cartid }, cart);
        }

        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(int id)
        {
            var cart = await _context.Carts.Include(c => c.User).Include(c => c.Product).FirstOrDefaultAsync(c => c.Cartid == id);
            if (cart == null)
            {
                return NotFound();
            }

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CartExists(int id)
        {
            return _context.Carts.Any(e => e.Cartid == id);
        }
    }
}
