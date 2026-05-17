export default function Notifications() {

  const notifications = [
    "New TikTok order completed",
    "M-PESA payment confirmed",
    "Instagram service updated",
    "Referral bonus added"
  ];

  return (
    <div className="glass p-8 rounded-[30px] mt-10">

      <h2 className="text-3xl font-black mb-6">
        Notifications
      </h2>

      <div className="space-y-4">

        {notifications.map((note, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            {note}
          </div>
        ))}

      </div>

    </div>
  );
}