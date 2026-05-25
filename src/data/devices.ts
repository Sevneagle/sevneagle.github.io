// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机笔电: [
	                {
			name: "Realme GT Master Explorer",
			image: "/images/device/realmegtmasterexplorer.png",
			specs: "12G + 256G",
			description:
				"2769元购入,4500mAh电池,65WSuperVOOC,重185g.",
			link: "https://www.realme.com/realme-gt-riven-a",
	                },
		{
			name: "华硕天选4(2023)",
			image: "/images/device/tianxuan4.png",
			specs: "AMD R9 / 8G(已坏一根)RAM / 512G+1T SSD",
			description:
				"7599购入,华硕天选4是华硕品牌旗下的笔记本电脑,并在2023年2月22日22:00开售，主要包括天选 4Plus系列、天选4酷睿和天选4锐龙系列，可选RTX 4050 到RTX 4070 GPU.",
			link: "https://www.asus.com.cn/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f15-2023/",
		},
	          
		],
	其他: [
		{
			name: "雷柏VT3s",
			image: "/images/device/shubiao.png",
			specs: "50~26000DPI",
			description:
				"166.9购入,中小手型-双模轻量化无线电竞鼠标.",
			link: "https://www.rapoo.cn/product/856",
		},
		{
			name: "Akko初音未来键盘",
			image: "/images/device/jianpan.png",
			specs: "三模 + 钢琴轴",
			description:
				"177.95购入,绿色款,重1.2kg,3000mAh电池,增补键帽9颗,备用钢琴轴体5颗,防尘罩,拔键器,拔轴器,2.4G转换器,电源线,说明书,接收器,合格证.",
			link: "https://www.akkogear.com/pd.jsp?id=46",
		},
		{
			name: "华为AX3pro",
			image: "/images/device/ax3pro.png",
			specs: "四口千兆+Wi-Fi6",
			description:
				"链接为AX3,路由器命名比较神秘,难以找到曾经的型号",
			link: "https://www.vmall.com/product/comdetail/index.html?prdId=10086005889863&cid=377689",
		},
		{
			name: "华为WS5200增强版",
			image: "/images/device/ws5200enhance.png",
			specs: "四口千兆",
			description:
				"链接为WS5200增强版NEW,难以找到曾经型号",
			link: "https://www.vmall.com/product/comdetail/index.html?sbomCode=3001010011402",
		},
	],
	/*
	OnePlus: [
		{
			name: "OnePlus 13T",
			image: "/images/device/oneplus13t.webp",
			specs: "Gray / 16G + 1TB",
			description:
				"Flagship performance, Hasselblad imaging, 80W SuperVOOC.",
			link: "https://www.oneplus.com/cn/13t",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.webp",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
	*/
};
