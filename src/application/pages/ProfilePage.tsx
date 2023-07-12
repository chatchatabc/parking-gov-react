import useGetData from "../hooks/useGetData";
import { userGetMe } from "../../domain/services/userService";
import { User } from "../../domain/models/UserModel";
import ImageComp from "../components/ImageComp";

function ProfilePage() {
  const { data, loading } = useGetData<User>({
    getData: userGetMe,
    params: {},
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error</div>;
  }

  return (
    <div className="p-2 flex">
      {/* Left */}
      <div className="w-1/3">
        {/* Avatar Container */}
        <div className="p-2">
          <div className="bg-slate-50 rounded-lg p-4">
            <header>
              <h2 className="text-xl font-medium">User Avatar</h2>
            </header>

            <section className="my-2">
              <div className="max-w-[250px] mx-auto">
                <div className="rounded-full overflow-hidden pb-[100%] relative">
                  <ImageComp
                    src={`/api/user/avatar/${data.userUuid}`}
                    className="w-full h-full absolute object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-2/3">
        {/* User Container */}
        <div className="p-2">
          <div className="bg-slate-50 rounded-lg p-4">
            <header>
              <h2 className="text-xl font-medium">User Information</h2>
            </header>

            <section className="flex flex-wrap mt-1 -mx-1">
              <div className="w-1/3 p-1">
                <p className="font-bold text-xs uppercase">Username</p>
                <p>{data.username}</p>
              </div>
              <div className="w-1/3 p-1">
                <p className="font-bold text-xs uppercase">Phone</p>
                <p>{data.phone}</p>
              </div>
              <div className="w-1/3 p-1">
                <p className="font-bold text-xs uppercase">Email</p>
                <p>{data.email}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
