USE [Ecommerce]
GO

/****** Object:  Table [dbo].[orders]    Script Date: 22-08-2022 15:16:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[orders](
	[orderid] [int] IDENTITY(1,1) NOT NULL,
	[userid] [int] NOT NULL,
	[Productid] [int] NOT NULL,
	[orderdate] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_orders] PRIMARY KEY CLUSTERED 
(
	[orderid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[orders]  WITH CHECK ADD  CONSTRAINT [FK_orders_Products] FOREIGN KEY([Productid])
REFERENCES [dbo].[Products] ([Productid])
GO

ALTER TABLE [dbo].[orders] CHECK CONSTRAINT [FK_orders_Products]
GO

ALTER TABLE [dbo].[orders]  WITH CHECK ADD  CONSTRAINT [FK_orders_Users] FOREIGN KEY([userid])
REFERENCES [dbo].[Users] ([userid])
GO

ALTER TABLE [dbo].[orders] CHECK CONSTRAINT [FK_orders_Users]
GO

