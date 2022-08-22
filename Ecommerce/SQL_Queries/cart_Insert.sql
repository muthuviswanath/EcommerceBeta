USE [Ecommerce]
GO

INSERT INTO [dbo].[cart]
           ([userid]
           ,[Productid]
           ,[carttotal])
     VALUES
           (1,1,120000),
		   (2,2,130000),
		   (3,3,140000),
		   (4,2,140000),
		   (5,2,160000);
GO


