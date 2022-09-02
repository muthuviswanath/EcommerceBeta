using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceBetaAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace EcommerceBetaAPI.Controllers
{/*
    [Authorize]*/
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly EcommerceContext _context;
        public UsersController(EcommerceContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.Include(u => u.Carts).ThenInclude(c => c.Product).Include(u => u.Orders).Include(u => u.Wishlists).ThenInclude(u => u.Product).ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.Include(u => u.Carts).ThenInclude(c => c.Product).Include(u => u.Orders).Include(u => u.Wishlists).ThenInclude(u => u.Product).FirstOrDefaultAsync(u => u.Userid == id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        //GET: api/Users/shubham
        [HttpGet("Username/{username}")]
        public int GetUserIdByName(string username)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username.Equals(username));

            if (user == null)
            {
                return 0;
            }

            return user.Userid;
        }



        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Userid)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Userid }, user);
        }
        //post used for login verification
        [HttpPost("login")]
        public async Task<ActionResult<User>> LoginUser(User user)
        {
            //_context.Users.Add(user);
            var currentUser = _context.Users.Where(u => u.Username == user.Username &&
            u.Password == user.Password);
            var dbUser = await currentUser.FirstOrDefaultAsync();
            return dbUser;
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.Include(u => u.Carts).ThenInclude(c => c.Product).Include(u => u.Orders).Include(u => u.Wishlists).FirstOrDefaultAsync(u => u.Userid == id); ;
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Userid == id);
        }
    }
}
