import { BsTelegram, BsFacebook, BsYoutube } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

import { Moul } from "next/font/google";
const moul = Moul({ subsets: ["khmer"], weight: "400" });

export default function AboutPage() {
  return (
    <section className="h-full overflow-y-auto">
      <div className={`battambang`}>
        {/*  */}
        <div>
          <h2 className={`${moul.className} mt-4 text-xl underline`}>
            អំពីកម្មវិធី
          </h2>
          <p className="text-justify mt-4 text-lg">
            វចនានុក្រមចិន -
            ខ្មែរនេះត្រូវបានបង្កើតឡើងក្នុងគោលបំណងជួយសម្រួលពាក្យពិបាកដល់អ្នកសិក្សាភាសាចិនឬសម្រាប់ស្រាវជ្រាវបន្ថែមទៅលើពាក្យនិងប្រយោគ។
            វចនានុក្រមនេះត្រូវបានរៀបចំឡើងជា៤ផ្នែក ទី១ ពាក្យ ទី២ ប្រយោគឧទាហរណ៍
            ទី៣ គំនូសចលនា ទី៤ គំនូស
            ត្រង់ចំណុចពាក្យនិងប្រយោគឧទាហរណ៍យើងមានបកប្រែជាភាសាខ្មែរ
            ពិសេសជាងនេះទៀតនោះយើងបានតំឡើងសំនៀងអានទាំងពាក្យនិងប្រយោគឧទាហរណ៍ដើម្បីឲ្យអ្នកសិក្សាងាយស្រួលអនុវត្តតាមការបញ្ចេញសំឡេង។
            ជាចុងក្រោយយើងខ្ញុំសង្ឃឹមថាវចនានុក្រមនេះនឹងកំដរអ្នកគ្រប់កាលវេលា។
          </p>
        </div>

        {/*  */}
        <div>
          <h2 className={`${moul.className} mt-4 text-xl underline`}>
            ទំនាក់ទំនង
          </h2>
          <p className="text-justify mt-4 text-lg">
            សម្រាប់ការសាកសួរពត៌មានផ្សេងៗ
            ឬកែលំអនូវវចនានុក្រមនេះឲ្យកាន់តែសំបូរបែបដើម្បីជាប្រយោជន៍ដល់អ្នកសិក្សាផ្សេងៗទៀត
            លោកអ្នកអាចទំនាក់ទំនងពួកយើងភ្លាមៗតាមរយៈ
          </p>

          <div className="w-auto">
            <Link
              href="https://t.me/SuonVansak"
              className="underline flex items-center gap-2"
            >
              <BsTelegram size={20} />
              <span>តេឡេក្រាម</span>
            </Link>
            <Link
              href="https://facebook.com/vansaksuon"
              className="underline flex items-center gap-2"
            >
              <BsFacebook size={20} />
              <span>ហ្វេសប៊ូក</span>
            </Link>
          </div>
        </div>

        {/*  */}
        <div>
          <h2 className={`${moul.className} mt-4 text-xl underline`}>
            តាមដានពួកយើង
          </h2>
          <div className="mt-4">
            <Link
              href="https://www.facebook.com/LetsLearnChinese168"
              className="underline flex items-center gap-2"
            >
              <BsFacebook size={20} />
              <span>ហ្វេសប៊ូក</span>
            </Link>
            <Link
              href="https://youtube.com/c/HENGCHANVEASNA"
              className="underline flex items-center gap-2"
            >
              <BsYoutube size={20} />
              <span>យូធូប</span>
            </Link>
            <Link
              href="https://t.me/womenxuezhongwenba"
              className="underline flex items-center gap-2 "
            >
              <BsTelegram size={20} />
              <span>តេឡេក្រាម</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@learnchinese168"
              className="underline flex items-center gap-2 "
            >
              <SiTiktok size={20} />
              <span>តិកតុក</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
