USE [Ecommerce]
GO

/****** Object:  Table [dbo].[cart]    Script Date: 22-08-2022 15:16:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[cart](
	[cartid] [int] IDENTITY(1,1) NOT NULL,
	[userid] [int] NOT NULL,
	[Productid] [int] NOT NULL,
	[carttotal] [float] NOT NULL,
 CONSTRAINT [PK_cart] PRIMARY KEY CLUSTERED 
(
	[cartid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[cart]  WITH CHECK ADD  CONSTRAINT [FK_cart_Products] FOREIGN KEY([Productid])
REFERENCES [dbo].[Products] ([Productid])
GO

ALTER TABLE [dbo].[cart] CHECK CONSTRAINT [FK_cart_Products]
GO

ALTER TABLE [dbo].[cart]  WITH CHECK ADD  CONSTRAINT [FK_cart_Users] FOREIGN KEY([userid])
REFERENCES [dbo].[Users] ([userid])
GO

ALTER TABLE [dbo].[cart] CHECK CONSTRAINT [FK_cart_Users]
GO

