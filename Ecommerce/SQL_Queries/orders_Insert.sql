USE [Ecommerce]
GO

INSERT INTO [dbo].[orders]
           ([userid]
           ,[Productid]
           ,[orderdate])
     VALUES
           (1,1,'2022-08-22T19:58:47.1234567'),
		   (2,2,'2022-08-21T19:58:47.1234567'),
		   (3,2,'2022-08-22T19:58:47.1234567'),
		   (4,3,'2022-08-21T19:58:47.1234567'),
		   (5,4,'2022-08-20T19:58:47.1234567');
GO


