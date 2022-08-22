USE [Ecommerce]
GO

INSERT INTO [dbo].[Users]
           ([username]
           ,[password]
           ,[address]
           ,[emailid])
     VALUES
           ('Surabhi','1234@qwerty'	,'Marathhalli,Banglore'	,'surabhi.n.311@gmail.com'),
('Vedika','1234@qwerty'	,'Kota,Rajasthan','vedika@gmail.com'),
('Shubham','12@shubham','Surat,Gujrath'	,'shubhambhajaj@gmail.com'),
('Kstij','12@kstij','Marathhalli,banglore'	,'kstij@gmail.com'),
('Adam','1234%asdfg','hsr,Banglore','adam@gmail.com');
GO