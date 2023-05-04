import React from "react";

import { BarLoader } from "react-spinners";
import { useGetCurrentUserQuery } from "../features/api/auth";
import { useGetCartQuery } from "../features/api/cart";

import Container from "../Component/Container";
import ShoppingBagCard from "../Component/ShoppingBagCard";
import TotalPrice from "../Component/TotalPrice";
import emptyBag from "../images/EmptyBag.png";
import { useSelector } from "react-redux";

function ShopBag() {
  const { data: bag, isLoading, error, isError } = useGetCartQuery();
  const { user } = useSelector((state) => state.user);

  console.log(bag, "bag");
  console.log(user, "usery current");

  isLoading && (
    <div className="flex justify-center items-center h-screen">
      <BarLoader color="#316C57" height={5} width={200} />
    </div>
  );

  isError && <p>{error.status}</p>;
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="min-h-screen py-28">
          {/* {bag?.data?.filter((item) => item.user._id === user?._id)} */}

          {bag?.data?.length === 0 ? (
            <div className="flex justify-center items-center">
              {console.log("here")}
              <img
                alt="empty bag"
                src={emptyBag}
                className="lg:w-2/4 lg:h-fit object-cover"
              />
            </div>
          ) : (
            // <div>hello</div>
            bag?.data?.map((data, i) => {
              return (
                <>
                  {data?.user._id === user?._id ? (
                    data?.products?.length === 0 ? (
                      <div className="flex justify-center items-center">
                        {/* {console.log("here")} */}
                        <img
                          alt="empty bag"
                          src={emptyBag}
                          className="lg:w-2/4 lg:h-fit object-cover"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 pag-5">
                        <ShoppingBagCard />
                        <TotalPrice />
                      </div>
                    )
                  ) : (
                    <p>your bag is emtpty</p>
                  )}
                </>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
}

export default ShopBag;
