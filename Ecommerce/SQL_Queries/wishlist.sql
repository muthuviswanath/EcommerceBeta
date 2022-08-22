USE [Ecommerce]
GO

/****** Object:  Table [dbo].[wishlist]    Script Date: 22-08-2022 15:17:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[wishlist](
	[wishlistid] [int] IDENTITY(1,1) NOT NULL,
	[userid] [int] NOT NULL,
	[Productid] [int] NOT NULL,
 CONSTRAINT [PK_wishlist] PRIMARY KEY CLUSTERED 
(
	[wishlistid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[wishlist]  WITH CHECK ADD  CONSTRAINT [FK_wishlist_Products] FOREIGN KEY([Productid])
REFERENCES [dbo].[Products] ([Productid])
GO

ALTER TABLE [dbo].[wishlist] CHECK CONSTRAINT [FK_wishlist_Products]
GO

ALTER TABLE [dbo].[wishlist]  WITH CHECK ADD  CONSTRAINT [FK_wishlist_Users] FOREIGN KEY([userid])
REFERENCES [dbo].[Users] ([userid])
GO

ALTER TABLE [dbo].[wishlist] CHECK CONSTRAINT [FK_wishlist_Users]
GO

