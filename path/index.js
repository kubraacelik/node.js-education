const path = require('path')

// Bir dosya yolunun uzantısını döndürür.(.js)
console.log(path.extname ("C:\\Users\\pc\\Desktop\\nodejs egitim\\path\\index.js"))
// Dosya yolundan sadece dosya adını döndürür.(index)
console.log(console.log ('base', path.basename('C:\\Users\\pc\\Desktop\\nodejs egitim\\path\\index.js', '.js')))
// Verilen dosya yolunun dizininin yolunu döndürür.(C:\Users\pc\Desktop\nodejs egitim\path)
console.log(console.log ('dir', path.dirname('C:\\Users\\pc\\Desktop\\nodejs egitim\\path\\index.js')))

const pathFormat = path.format({
root: '/test/asd/',
name: "dosya",
ext: ".txt"
})

//  Bir dosya yolunu nesne formatında vererek tam dosya yolunu oluşturur.(/test/asd/dosya.txt)
console.log('format', pathFormat)
// Verilen parçaları birleştirerek bir dosya yolu oluşturur.(/abc/test/deneme/y/z)
console.log('join', path.join('/abc', 'test', 'deneme/y', 'z'))
//  Verilen dosya yolunu parçalara ayırır.
console.log('parse', path.parse('C:\\Users\\pc\\Desktop\\nodejs egitim\\path\\index.js'))
// Verilen yolları mutlak bir yol haline getirir.(/a/b/c)
console.log(path.posix.resolve('/a', 'b', 'c')) 
// Çıktı: \b\c
console.log(path.posix.resolve('/a', '/b', 'c')) 
// Çıktı: \c
console.log(path.posix.resolve('/a', '/b', '/c')) 