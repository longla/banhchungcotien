"use client";

import useAnalytics from "../ultilities/analystic";
const HomePage = () => {
  // Google Analytics and Meta Pixel Code initialization
  // Initialize analytics
  useAnalytics();
  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "Purchase");
      }
      if (window.gtag) {
        window.gtag("event", "phone_click", {
          event_category: "Contact",
          event_label: "Phone Call",
          value: 1,
        });
      }
    }
  };

  const findLocationClick = () => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        window.fbq("track", "FindLocation");
      }
    }
  };

  const handleMapImageClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=8128+W+Cerritos+Ave,+Stanton,+CA+90680",
      "_blank"
    );
    findLocationClick(); // Keep the tracking call if needed
  };

  return (
    <div className="bg-gray-100 text-center p-[4%]">
      <h1 className="text-2xl font-bold text-gray-800">Bánh Chưng Cô Tiên</h1>
      <p className="text-xl text-gray-700 mt-4">
        Bánh chưng làm tại California chuẩn vị quê nhà 🏡
      </p>
      <a
        href="tel:6572726533"
        onClick={handlePhoneClick}
        className="mt-6 inline-block px-6 py-3 text-white font-bold bg-red-500 rounded-lg text-lg font-medium hover:bg-red-600 active:scale-95 active:bg-red-700 shadow-lg"
      >
        📞 Gọi Đặt Bánh: 657-272-6533
      </a>
      <div className="mt-6">
        {[
          {
            size: "Nhỏ",
            price: "$3.00",
            content: (
              <ul className="list-inside text-left space-y-2">
                <li>
                  <strong>📏 Kích thước nhỏ gọn:</strong> Bánh chưng bằng một
                  nắm tay, dễ dàng mang theo khi đi làm, đi học hoặc tham gia
                  các buổi tiệc.
                </li>
                <li>
                  <strong>🌿 Hương vị truyền thống:</strong> Gói bằng lá chuối,
                  nhân đậu xanh và thịt heo thơm ngon, chuẩn vị Tết cổ truyền.
                </li>
                <li>
                  <strong>🥢 Dinh dưỡng cân bằng:</strong> Cung cấp năng lượng
                  đầy đủ, phù hợp cho bữa ăn nhanh mà vẫn no bụng.
                </li>
              </ul>
            ),
          },
          {
            size: "Trung",
            price: "$10.00",
            content: (
              <ul className="list-inside text-left space-y-2">
                <li>
                  <strong>📏 Kích thước bằng 4 bánh size nhỏ:</strong> Lý tưởng
                  cho các bữa ăn gia đình hoặc nhóm nhỏ.
                </li>
                <li>
                  <strong>🌿 Hương vị truyền thống:</strong> Gói bằng lá chuối,
                  nhân đậu xanh và thịt heo thơm ngon, chuẩn vị Tết cổ truyền.
                </li>
                <li>
                  <strong>🥢 Chia sẻ dễ dàng:</strong> Phần ăn phù hợp để chia
                  sẻ trong các dịp sum họp.
                </li>
              </ul>
            ),
          },
          {
            size: "Lớn",
            price: "$20.00",
            content: (
              <ul className="list-inside text-left space-y-2">
                <li>
                  <strong>📏 Kích thước bằng 8 bánh size nhỏ:</strong> Phù hợp
                  cho đại gia đình và các bữa tiệc lớn.
                </li>
                <li>
                  <strong>🌿 Hương vị truyền thống:</strong> Gói bằng lá chuối,
                  nhân đậu xanh và thịt heo thơm ngon, chuẩn vị Tết cổ truyền.
                </li>
                <li>
                  <strong>🥢 Phần ăn dồi dào:</strong> Cung cấp phần ăn lớn,
                  trọn vẹn cho mọi người.
                </li>
              </ul>
            ),
          },
        ].map((item) => (
          <details
            key={item.size}
            className="bg-white rounded-lg border border-gray-200 my-2"
          >
            <summary className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-900 bg-gray-50 rounded-t-lg cursor-pointer">
              Bánh Size {item.size}
              <div className="flex items-center gap-5">
                <span>{item.price}</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </summary>
            <div className="px-4 py-2 border-t border-gray-200">
              {item.content}
            </div>
          </details>
        ))}
      </div>
      <p className="text-red-600 font-semibold mt-4">
        Vui lòng gọi đặt bánh trước, pick up only.
      </p>
      <p className="text-red-600 font-semibold mt-4">📦 Nhận bỏ bánh giá sỉ</p>
      <a
        href="https://www.google.com/maps/search/?api=1&query=8128+W+Cerritos+Ave,+Stanton,+CA+90680"
        target="_blank"
        className="text-lg text-gray-700 my-3 block underline"
        onClick={findLocationClick}
      >
        📍 Địa chỉ: 8128 W Cerritos Ave, Stanton, CA 90680
      </a>
      <div>
        <p className="text-gray-700">Hướng Dẫn Đậu Xe</p>
        <div
          onClick={handleMapImageClick}
          className="image-container max-w-[600px] max-h-[600px] mx-auto my-2"
        >
          <img
            src="/huong dan dau xe.jpg"
            alt="Parking Guide"
            id="guideImage"
          />
        </div>
        <div className="px-[4%] mt-6">
          <ul className="list-disc text-left">
            {/* Replace with actual content */}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-1">
        <a href="https://m.me/61570225125522" target="_blank" rel="noreferrer">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-halo"></div>
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-2xl transition transform duration-300 ease-in-out">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
                alt="Messenger Icon"
                className="w-10 h-10"
              />
            </div>
          </div>
          <p className="text-sm font-semibold text-gray-800">Tư Vấn</p>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
