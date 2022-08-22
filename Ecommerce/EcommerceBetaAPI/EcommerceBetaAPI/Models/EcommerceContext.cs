using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EcommerceBetaAPI.Models
{
    public partial class EcommerceContext : DbContext
    {
        public EcommerceContext()
        {
        }

        public EcommerceContext(DbContextOptions<EcommerceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cart> Carts { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Wishlist> Wishlists { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=localhost;Database=Ecommerce;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.Property(e => e.Cartid).HasColumnName("cartid");

                entity.Property(e => e.Carttotal).HasColumnName("carttotal");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.Productid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_cart_Products");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Carts)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_cart_Users");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("orders");

                entity.Property(e => e.Orderid).HasColumnName("orderid");

                entity.Property(e => e.Orderdate).HasColumnName("orderdate");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.Productid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_orders_Products");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_orders_Users");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Battery)
                    .IsRequired()
                    .HasColumnName("battery");

                entity.Property(e => e.Camera)
                    .IsRequired()
                    .HasColumnName("camera");

                entity.Property(e => e.Display)
                    .IsRequired()
                    .HasColumnName("display");

                entity.Property(e => e.Imagepath)
                    .IsRequired()
                    .HasColumnName("imagepath");

                entity.Property(e => e.Memory)
                    .IsRequired()
                    .HasColumnName("memory");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Processor)
                    .IsRequired()
                    .HasColumnName("processor");

                entity.Property(e => e.Productname).IsRequired();

                entity.Property(e => e.Productofferprice).HasColumnName("productofferprice");

                entity.Property(e => e.Productrating).HasColumnName("productrating");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.Security)
                    .IsRequired()
                    .HasColumnName("security");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasColumnName("address");

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("emailid");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("password");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<Wishlist>(entity =>
            {
                entity.ToTable("wishlist");

                entity.Property(e => e.Wishlistid).HasColumnName("wishlistid");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Wishlists)
                    .HasForeignKey(d => d.Productid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_wishlist_Products");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Wishlists)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_wishlist_Users");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
