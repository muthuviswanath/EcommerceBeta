USE [Ecommerce]
GO

INSERT INTO [dbo].[Products]
           ([Productname]
           ,[quantity]
           ,[price]
           ,[imagepath]
           ,[productrating]
           ,[productofferprice]
           ,[display]
           ,[memory]
           ,[processor]
           ,[camera]
           ,[battery]
           ,[security])
     VALUES
           ('SAMSUNG Galaxy Z Fold 3 5G',100,180000,'./assets/samsung.png',4.8,165000,'7.6 inches (19.3 cm), AMOLED, 120 Hz Refresh Rate','12GB RAM, 256GB ROM','Qualcomm Snapdragon 888 5G, Octa Core, 1.80 GHz','12 MP + 12 MP + 12 MP Triple Rear & 10 MP Front Camera','4400 mAh','Password | Pattern | PIN | Fingerprint Sensor | Face Unlock'),
		   ('Apple iPhone 13 Pro',50,121133,'./assets/iphone.png',4.9,135000,'6.1 inches (15.49 cm), Super Retina XDR OLED, 120 Hz Refresh Rate','128GB ROM','Apple A15 Bionic, Hexa Core','12 MP + 12 MP + 12 MP Triple Rear & 12 MP Front Camera','20W Fast Charging','Password | PIN | Fingerprint Sensor | Face Unlock'),
		   ('OnePlus 10R 5G',75,54611,'./assets/oneplus.png',4.5,35000,'6.7 inches (17.01 cm), Fluid OLED, 120 Hz Refresh Rate','12GB RAM, 256GB ROM','MediaTek Dimensity 8100 Max, Octa Core','50 MP + 8 MP + 2 MP Triple Rear & 16 MP Front Camera','5000 mAh with 80W SuperVOOC Charging','Password | Pattern | PIN | Fingerprint Sensor | Face Unlock'),
		   ('OPPO Reno 7 Pro 5G',65,56525,'./assets/oppo.png',4.8,35000,'6.4 inches (16.25 cm), AMOLED, 120 Hz Refresh Rate','12GB RAM, 256GB ROM','MediaTek Dimensity 1200, Octa Core, 3 GHz','50 MP + 8 MP + 2 MP Triple Rear & 32 MP Front Camera','4500 mAh with 65W Fast Charging','Password | Pattern | PIN | Fingerprint Sensor | Face Unlock'),
		   ('vivo X80 Pro 5G',35,35000,'./assets/vivo.png',4.2,32000,'6.78 inches (17.22 cm), AMOLED, 120 Hz Refresh Rate','12GB RAM, 256GB ROM','Qualcomm Snapdragon, Octa Core, 3 GHz','50 MP + 8 MP + 12 MP + 8 MP Quad Rear & 32 MP Front Camera','4700 mAh with 80W Super Charging','Password | Pattern | PIN | Fingerprint Sensor');
GO


