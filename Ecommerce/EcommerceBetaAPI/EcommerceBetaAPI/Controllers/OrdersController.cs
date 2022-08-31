using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceBetaAPI.Models;
using EcommerceBetaAPI.Dto;

namespace EcommerceBetaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly EcommerceContext _context;

        public OrdersController(EcommerceContext context)
        {
            _context = context;
        }

        ////// GET: api/Orders
        /*[HttpGet]
         public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
         {
             return await _context.Orders.Include(o => o.User).Include(x => x.Product).ToListAsync();
         }*/

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ordersDTO>>> GetOrders()
        {
            var order = _context.Orders.Include(o => o.User).Include(o => o.Product).Select(x =>
            new ordersDTO
            {
                UserId = x.Userid,
                OrderId = x.Orderid,
                OrderDate = x.Orderdate,
                TotalPrice = x.TotalPrice,
                ProductName = x.Product.Productname,
                Imagepath=x.Product.Imagepath,

            }) ;
          var value = await order.ToListAsync();
           return value;
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.Include(o => o.User).Include(o => o.Product).FirstOrDefaultAsync(o => o.Orderid == id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(int id, Order order)
        {
            if (id != order.Orderid)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
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

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Orders.Include(o => o.User).Include(o => o.Product);
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrder", new { id = order.Orderid }, order);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderExists(int id)
        {
            return _context.Orders.Any(e => e.Orderid == id);
        }
    }
}
