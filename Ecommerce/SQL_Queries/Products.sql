USE [Ecommerce]
GO

/****** Object:  Table [dbo].[Products]    Script Date: 22-08-2022 15:33:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products](
	[Productid] [int] IDENTITY(1,1) NOT NULL,
	[Productname] [nvarchar](max) NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [float] NOT NULL,
	[imagepath] [nvarchar](max) NOT NULL,
	[productrating] [float] NOT NULL,
	[productofferprice] [float] NOT NULL,
	[display] [nvarchar](max) NOT NULL,
	[memory] [nvarchar](max) NOT NULL,
	[processor] [nvarchar](max) NOT NULL,
	[camera] [nvarchar](max) NOT NULL,
	[battery] [nvarchar](max) NOT NULL,
	[security] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Productid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

